// Import necessary modules and controllers
import express from 'express';
import {
  deleteComplaintById,
  getAllComplaints,
  getComplaintById
} from '../controllers/eComplaint.js';

import {
  getAllTimetables,
  createTimetable,
  updateTimetable,
  deleteTimetable
} from '../controllers/timeTable.js';

import {
  getStaffProfile
} from '../controllers/profile.js';

const router = express.Router();
import { verifyToken } from '../middleware/auth.js';


router.get('/:id/profile', verifyToken,getStaffProfile);

import { getAllAnnouncements,deleteAnnouncement,getAnnouncementById } from '../controllers/announcement.js';
/* POST */

// timetable Controllers
router.post('/:id/timetable/create', verifyToken, createTimetable);
router.post('/:id/timetable/all', verifyToken, getAllTimetables);
router.patch('/:id/timetable/update/:timetableID', verifyToken, updateTimetable);
router.patch('/:id/timetable/delete/:timetableID', verifyToken, deleteTimetable);

// eComplaint Controllers
router.get('/:id/eComplaint/:complaintID', verifyToken, getComplaintById);
router.get('/:id/eComplaint/all', verifyToken, getAllComplaints);
router.get('/:id/eComplaint/delete/:complaintID', verifyToken, deleteComplaintById);

// announcement Controllers


router.get('/:id/announcement/all', verifyToken, getAllAnnouncements);
router.get('/:id/announcement/:announcementID', verifyToken, getAnnouncementById);
router.patch('/:id/announcement/delete/:announcementID', verifyToken, deleteAnnouncement);

export default router;