import { useEffect, useState } from "react";
import { PersistentDrawerLeft } from "../../components/student/navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ComplaintById = () => {
    const [complain, setComplain] = useState(null);
    const token = useSelector((state) => state.token);
    const { id, complaintId } = useParams();
    const [loading, setLoading] = useState(true);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

    useEffect(() => {
        const fetchComplain = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/student/${id}/eComplaint/${complaintId}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setComplain(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchComplain();
    }, []);

    return (
<div>
    <PersistentDrawerLeft />
    {loading && <div>Loading...</div>}
    {!loading && !complain && <div>No complaint found.</div>}
    {complain && (
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{complain.title}</Typography>
        <Typography variant="subtitle1">Email: {complain.email}</Typography>
        <Typography variant="subtitle1">Contact Number: {complain.contactNumber}</Typography>
        <Typography variant="subtitle1">Roll Number: {complain.rollNumber}</Typography>
        <Typography variant="subtitle1">Complaint Type: {complain.complainType}</Typography>
        <Typography variant="subtitle1">Description: {complain.description}</Typography>
        <Typography variant="subtitle1">Date: {formatDate(complain.date)}</Typography>
        <Typography variant="subtitle1">Status: {complain.status}</Typography>
        <Typography variant="subtitle1">picturePath: {complain.picturePath}</Typography>
        {complain.picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`http://localhost:3001/assets/${complain.picturePath}`}
          />
        )}
      </Box>
    )}
  </div>


    );
};
