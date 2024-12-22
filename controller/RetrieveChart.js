import ChartModel from "../model/chartModel.js";

const cache = {}; // Simple in-memory cache

const RetrieveChart = async (req, res) => {
  try {
    let query = req.query || {}; // Update to use request query parameters

    const cacheKey = JSON.stringify(query); // Create a unique key for the cache

    // Check if the data is already in the cache
    if (cache[cacheKey]) {
      return res.status(200).json({
        message: "Chart data retrieved from cache",
        data: cache[cacheKey],
      });
    }

    const specificChart = await ChartModel.find(query);

    // Store the result in the cache
    cache[cacheKey] = specificChart;

    // Update the response to include filterOptions
    res.status(200).json({
      // Change status code to 200
      message: "Chart data retrieved successfully",
      data: specificChart,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error inserting chart data", error: error.message });
  }
};

export default RetrieveChart;
