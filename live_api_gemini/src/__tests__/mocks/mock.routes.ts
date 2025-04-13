import { Router } from "express";
import multer from "multer";
import { MockResumeController } from "./MockResumeController";

const upload = multer();
const router = Router();
const controller = new MockResumeController();

router.post("/analyze", upload.single("file"), (req, res) =>
  controller.handle(req, res)
);

export default router;
