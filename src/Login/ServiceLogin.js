const baseUrl = "/auth";
const baseUrlData = "/users";

const login = async (form) => {
  const dataUser = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await dataUser.json();
};

export { login };
