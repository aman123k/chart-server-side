import data from "../jsondata.js";
import ChartModel from "../model/chartModel.js";

const InsertData = async (req, res) => {
  try {
    // Delete existing data in ChartModel
    await ChartModel.deleteMany({});
    // Insert All Json Data into Db
    const newChart = await ChartModel.insertMany(data);
    res
      .status(201)
      .json({ message: "Chart data inserted successfully", data: newChart });
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "Error inserting chart data", error: error.message });
  }
};

export default InsertData;
