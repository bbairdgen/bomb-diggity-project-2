const newFormHandler = async (event) => {
  event.preventDefault();

  const typo = document.querySelector("#typo").value.trim();
  const timesused = document.querySelector("#usage").value.trim();
  const correction = document.querySelector("#correction").value.trim();

  if (typo && correction) {
    const response = await fetch(`/api/autocorrects`, {
      method: "POST",
      body: JSON.stringify({ typo, correction }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }

  if (timesused) {
    const response = await fetch(`/api/totals`, {
      method: "POST",
      body: JSON.stringify({ timesused, autocorrect_id, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/projects/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete project");
//     }
//   }
// };

document
  .querySelector(".new-autocorrect-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector(".project-list")
//   .addEventListener("click", delButtonHandler);
