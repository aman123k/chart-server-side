import mongoose from "mongoose";

const chartSchema = mongoose.Schema({
  end_year: { type: String, trim: true },
  intensity: { type: Number, min: 0 },
  sector: { type: String, trim: true },
  topic: { type: String, trim: true },
  insight: { type: String, trim: true },
  url: { type: String, trim: true },
  region: { type: String, trim: true },
  start_year: { type: String, trim: true },
  impact: { type: String, trim: true },
  added: { type: String },
  published: { type: String },
  country: { type: String, trim: true },
  relevance: { type: Number, min: 0 },
  pestle: { type: String, trim: true },
  source: { type: String, trim: true },
  title: { type: String, trim: true },
  likelihood: { type: Number, min: 0 },
});

// Export the model
const ChartModel = mongoose.model("Chart", chartSchema);

export default ChartModel;
