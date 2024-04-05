// Import necessary modules and controllers
import express from 'express';
import { addAdditionalCourse, deleteAdditionalCourse } from '../controllers/additionalCourse.js';
import { verifyToken } from '../middleware/auth.js';
import { getFacultyProfile } from '../controllers/profile.js';
const router = express.Router();


router.get('/:id/profile', verifyToken,getFacultyProfile);

/* POST */

// additionalCourses Controllers
router.post('/:id/additionalCourse/add', verifyToken, addAdditionalCourse);
router.post('/:id/additionalCourse/delete/:courseId', verifyToken, deleteAdditionalCourse);

export default router;