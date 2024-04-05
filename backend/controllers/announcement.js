import AnnouncementModel from '../models/announcement.js'; // Assuming your model file is in the same directory
import StaffModel from '../models/staff.js';

// Controller function to create a new announcement
export async function createAnnouncement(req, res) {
    try {
        const staff = StaffModel.findOne(req.params.id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        const {title, description,filePath} = req.body;
        const newAnnouncement = await AnnouncementModel.create({
            staffID: req.params.id,
            title,
            description,
            filePath,
        });
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Controller function to get all announcements
export async function getAllAnnouncements(req, res) {
    try {
        const announcements = await AnnouncementModel.find();
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller function to get a single announcement by ID
export async function getAnnouncementById(req, res) {
    try {
        const announcement = await AnnouncementModel.findById(req.params.announcementId);
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.status(200).json(announcement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Controller function to delete an announcement by ID
export async function deleteAnnouncement(req, res) {
    try {
        const deletedAnnouncement = await AnnouncementModel.findByIdAndDelete(req.params.announcementID);
        if (!deletedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
