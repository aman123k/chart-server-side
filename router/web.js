import express from "express";
import InsertData from "../controller/InsertChart.js";
import RetrieveChart from "../controller/RetrieveChart.js";

const router = express.Router();
router.get("/chart", InsertData);
router.get("/reciveChart", RetrieveChart);
export default router;
