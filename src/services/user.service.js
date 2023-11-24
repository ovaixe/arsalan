import axios from "axios";
import data from "../data/data.json";

export async function getLabels(setLabels) {
  try {
    const labels = data.Labels;
    setLabels(labels);
  } catch (err) {
    console.log("[ERROR][user.service:getLabels]: ", err);
  }
}

export async function getImages(setImages, page) {
  try {
    const images = data.Images;
    setImages(prev => [...prev, ...images]);
  } catch (err) {
    console.log("[ERROR][user.service:getImages]: ", err);
  }
}

export async function assignLabels(data) {
  try {
    console.log("data saved >>>>>", data);
  } catch (err) {
    console.log("[ERROR][user.service:assignLabels]: ", err);
  }
}

export async function removeLabels(data) {
  try {
    console.log("data saved >>>>>", data);
  } catch (err) {
    console.log("[ERROR][user.service:removeLabels]: ", err);
  }
}

export async function createLabels(data) {
  try {
    console.log("data saved >>>>>", data);
  } catch (err) {
    console.log("[ERROR][user.service:createLabels]: ", err);
  }
}

export async function deleteLabels(data) {
  try {
    console.log("data saved >>>>>", data);
  } catch (err) {
    console.log("[ERROR][user.service:deleteLabels]: ", err);
  }
}

export async function uploadFiles(data) {
  try {
    console.log("data saved >>>>>", data);
  } catch (err) {
    console.log("[ERROR][user.service:uploadFiles]: ", err);
  }
}
