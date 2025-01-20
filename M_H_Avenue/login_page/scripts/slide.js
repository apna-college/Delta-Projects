import { loadPage } from "./main.js";

export let slide_num = 0;

export function page_change_data(slide) {
  if (slide_num == 0) {
    // debugger
    const login = {
      h1: "Login to Your Account ",
      para: "Sign up using Social Networks",
      box_h1: "New Here?",
      box_para: "Sign up and discover new Products with Suitable Price!",
      button: "SIGN IN ",
      box_button: "SIGN UP - ( User )",
      box_button_admin: "SIGN UP - ( Admin )",
    };
    return login;
  }

  if (slide_num == 1) {
    const user_sign_up = {
      h1: "Create a New User Account",
      para: "Sign up using Social Networks",
      box_h1: "Already Account?",
      box_para: "Login and discover new Products with Suitable Price!",
      button: "SIGN UP",
      box_button: "SIGN IN",
      box_button_admin: "SIGN IN - ( Admin )",
      p1: "Username",
      p2: "Email",
      p3: "Password",
    };
    return user_sign_up;
  }

  if (slide_num == 2) {
    const owner = {
      h1: "Welcome Owner (Login)",
      para: "Login using Social Networks",
      box_h1: "Already Account?",
      box_para: "Login and discover new Products with Suitable Price!",
      button: "SIGN IN",
      box_button: "SIGN IN",
      p1: "Username",
      p2: "Email",
      p3: "Password",
      box_button_admin: "SIGN in - ( Admin )",
    };
    return owner;
  }

  if (slide_num == 3) {
    const admin_sign_up = {
      h1: "Create New Admin Account",
      para: "Sign up using Social Networks",
      box_h1: "Already Account?",
      box_para: "Login and discover new Products with Suitable Price!",
      button: "SIGN UP",
      box_button: "SIGN IN",
      box_button_admin: "SIGN IN - ( Admin )",
      p1: "Username",
      p2: "Email",
      p3: "Password",
    };
    return admin_sign_up;
  }
}

export let pageData = page_change_data();

function slideRighttoLeft() {
  document.querySelector(".right_box").classList.add("left_slide");
  document.querySelector(".Login_account").classList.add("right_slide");
  document.querySelector(".owner_button").style.opacity = "0";
  document.querySelector(".admin_button").style.opacity = "0";
  document.querySelector(".username").style.opacity = "1";
  setTimeout(() => {
    loadPage(page_change_data());
    document.querySelector(".right_box").classList.add("left_slide");
    document.querySelector(".Login_account").classList.add("right_slide");
    document.querySelector(".owner_button").style.opacity = "0";
    document.querySelector(".admin_button").style.opacity = "0";
    document.querySelector(".username").style.opacity = "1";
  }, 700);
}

function slideLeft_toRight() {
  document.querySelector(".right_box").classList.remove("left_slide");
  document.querySelector(".Login_account").classList.remove("right_slide");
  document.querySelector(".right_box").classList.add("right_slide_login");
  document.querySelector(".Login_account").classList.add("left_slide_login");
  setTimeout(() => {
    loadPage(page_change_data());
    document.querySelector(".right_box").classList.remove("left_slide");
    document.querySelector(".Login_account").classList.remove("right_slide");
    document.querySelector(".right_box").classList.add("right_slide_login");
    document.querySelector(".Login_account").classList.add("left_slide_login");
  }, 700);
}

export function slideButtons() {
  document.querySelector(".btn_right_button").addEventListener("click", () => {
    // Sign up new user
    if (slide_num == 0) {
      slide_num = 1;
      slideRighttoLeft();
    }
    // Sign in into all types account
    else if (slide_num == 1 || slide_num == 2 || slide_num == 3) {
      slide_num = 0;
      slideLeft_toRight();
    }
  });

  document.querySelector(".owner_button").addEventListener("click", () => {
    // Owner button
    slide_num = 2;
    slideRighttoLeft();
    document.querySelector(".username").style.opacity = "0";
  });

  document.querySelector(".admin_button").addEventListener("click", () => {
    // Admin button
    slide_num = 3;
    slideRighttoLeft();
  });
}
