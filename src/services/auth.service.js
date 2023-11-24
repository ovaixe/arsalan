import axios from "axios";

export async function validateUser() {
  return true;
}

export async function validateAdmin() {
  return false;
}

export async function login(data) {
  try {
    console.log("login >>>", data);
  } catch (err) {
    console.log("[ERROR][auth.service:login]: ", err);
  }
}

export async function signUp(data) {
  try {
    console.log("login >>>", data);
  } catch (err) {
    console.log("[ERROR][auth.service:signUp]: ", err);
  }
}
