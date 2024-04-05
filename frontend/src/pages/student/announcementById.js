import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, List, ListItem, ListItemText, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { PersistentDrawerLeft } from '../../components/student/navbar';

export const AnnouncementById = () => {
    const { userId, announcementId } = useParams(); // Get userId and announcementId from URL params
    const [announcement, setAnnouncement] = useState(null);
    const token = useSelector((state) => state.token);
    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/student/${userId}/announcement/${announcementId}`,{
                    method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                });
                setAnnouncement(response.data);
            } catch (error) {
                console.error('Error fetching announcement:', error);
            }
        };

        fetchAnnouncement();
    }, [userId, announcementId]);

    if (!announcement) {
        return <p>Loading...</p>; // Display loading indicator while fetching data
    }

    const { title, description, date, filePath } = announcement;

    return (
        <div>
            <PersistentDrawerLeft/>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ padding: '20px', border: '1px solid #ccc' }}>
                    <Typography variant="h2">{title}</Typography>
                    <Typography variant="body1">Description: {description}</Typography>
                    <Typography variant="body1">Date: {new Date(date).toLocaleDateString()}</Typography>
                    {filePath && filePath.map((file, index) => (
                        <img
                            key={index}
                            width="100%"
                            height="auto"
                            alt={`File ${index + 1}`}
                            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                            src={`http://localhost:3001/assets/${file}`}
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
        </div>
    );
};
