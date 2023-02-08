export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
  };
};

export function login(body) {
  return async () => {
    try {
      let data = await fetch(`https://nihon-no-live.foxhub.space/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let convert = await data.json();

      if (!data.ok) {
        throw convert;
      }

      localStorage.setItem("access_token", convert.access_token);
      localStorage.setItem("username", convert.username);
      localStorage.setItem("isSubscribed", convert.isSubscribed);
      localStorage.setItem("role", convert.role);

      return `Hi ${convert.username} you're successfully Sign In`;
    } catch (err) {
      throw err;
    }
  };
}

export function register(body) {
  return async () => {
    try {
      let data = await fetch(
        "https://nihon-no-live.foxhub.space/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const convert = await data.json();
      if (!data.ok) {
        throw convert;
      }
      return body.email;
    } catch (err) {
      throw err;
    }
  };
}
