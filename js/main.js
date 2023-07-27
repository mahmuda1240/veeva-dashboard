var get_events_where_hcp_registered_url =
  "https://connect-dev.bscdp.com/api/services/clients/BRAINSTATION/veevacrm/dashboard/eventrix/hcp/registered-events?";

// Getting the SFCAcID of the user  
ds.getDataForCurrentObject("Account", "Id").then(
  function (resp) {
    console.log(resp);
    mainFunc(resp);
  },
  function (err) {
    console.log(err);
  }
);

function mainFunc(jsonObj) {
  let userId = jsonObj.Account.Id;
  var url =
    get_events_where_hcp_registered_url + $.param({ account_id: userId });

  fetch("https://connect-dev.bscdp.com/api/core/service-accounts/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cf-access-client-id": "49ba3bf0f63999679d59483cc42ad23c.access",
      "cf-access-client-secret":
        "f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659",
    },
    body: JSON.stringify({
      client_id: "10001",
      client_secret: "7e6877395e9613dc0aa0a6cf6a32bc5a",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Authorization failed");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data)
      const token = data.access_token;

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "cf-access-client-id": "49ba3bf0f63999679d59483cc42ad23c.access",
          "cf-access-client-secret":
            "f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Authorization failed");
          }
          return response.json();
        })
        .then((data) => {
          const dropdown = document.getElementById("event-dropdown");
          dropdown.innerHTML = userId;
          for (let i = 0; i < data.length; i++) {
            const option = document.createElement("option");
            option.values = data[i].event_id;
            option.text = data[i].event_title;
            dropdown.appendChild(option);
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

// document.addEventListener("DOMContentLoaded", function(event) {
//   start();
// });

// queryCRMData();
mainFunc();
