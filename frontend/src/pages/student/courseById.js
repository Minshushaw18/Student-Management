import React, { useState, useEffect } from 'react';
import { PersistentDrawerLeft } from '../../components/student/navbar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CoursePage = () => {
    const { id,courseId } = useParams();
    const [course, setCourse] = useState(null);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://localhost:3001/student/${id}/additionalCourse/${courseId}`,{
                    method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                });
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to fetch course');
                }
                const courseData = await response.json();
                setCourse(courseData);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        fetchCourse();
    }, [courseId]);

    return (
        <div>
            <PersistentDrawerLeft />
            {course && (
                <div>
                    <h1>{course?.courseName}</h1>
                    <p>Description: {course?.description}</p>
                    <p>Start Date: {course?.startDate}</p>
                    <p>End Date: {course?.endDate}</p>
                    <p>Venue: {course?.venue}</p>
                    <p>Timing: {course?.timing}</p>
                    <p>Status: {course?.status}</p>
                </div>
            )}
        </div>
    );
};
