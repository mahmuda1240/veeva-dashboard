var get_events_where_hcp_registered_url =
  "https://connect-dev.bscdp.com/api/services/clients/BRAINSTATION/veevacrm/dashboard/eventrix/hcp/registered-events?";

// var overall_reg_performence_url = "https://connect-dev.bscdp.com/api/services/clients/BRAINSTATION/veevacrm/dashboard/eventrix/1000/overall-reg-performance?country_iso=DE&event_id=${output}"

// ds.getDataForCurrentObject('Account', 'Id').then(
//     function(resp) {
//         console.log(resp);
//         mainFunc(resp);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

// function mainFunc(jsonObj) {
//   let userId = jsonObj.Account.Id ;
//   var url = get_events_where_hcp_registered_url + $.param({account_id: userId})

//   fetch("https://connect-dev.bscdp.com/api/core/service-accounts/token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     'cf-access-client-id': '49ba3bf0f63999679d59483cc42ad23c.access',
//     'cf-access-client-secret': 'f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659'
//   },
//   body: JSON.stringify({
//     client_id: "10001",
//     client_secret: "7e6877395e9613dc0aa0a6cf6a32bc5a",
//   }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Authorization failed");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data)
//     const token = data.access_token;

//     fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//         'cf-access-client-id': '49ba3bf0f63999679d59483cc42ad23c.access',
//         'cf-access-client-secret': 'f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659'
//       },
//     }
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Authorization failed");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//       const dropdown = document.getElementById('event-dropdown');
//       dropdown.innerHTML = userId;
//       for(let i=0 ; i<data.length; i++){
//         const option = document.createElement('option');
//         option.values = data[i].event_id
//         option.text = data[i].event_title
//         dropdown.appendChild(option);
//         overallRegistrationPerformence(option.values)
//       }
//     })
//     .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));
// }

// function overallRegistrationPerformence(eventId){

// }

// mainFunc();

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
    console.log(data);
    const token = data.access_token;

    fetch(
      get_events_where_hcp_registered_url +
        $.param({ account_id: "0012h00000oUAugAAG" }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "cf-access-client-id": "49ba3bf0f63999679d59483cc42ad23c.access",
          "cf-access-client-secret":
            "f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Authorization failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const dropdown = document.getElementById("event-dropdown");
        for (let i = 0; i < data.length; i++) {
          const option = document.createElement("option");
          option.value = data[i].event_id;
          option.text = data[i].event_title;
          dropdown.appendChild(option);
        }
        // onload(data[0].event_id);
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));

// function overallRegistrationPerformence(eventId){
//   console.log(eventId)
//   const overallRegPer = document.getElementById('overall-registration-performence');
//   const list = document.createElement("li")
//   list.innerHTML = eventId;
//   overallRegPer.appendChild(list)
// }

function getOption() {
  selectElement = document.querySelector("#event-dropdown");
  output = selectElement.value;
  // document.querySelector('#overall-registration-performence').textContent = output;
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
      console.log(data);
      const token = data.access_token;
      fetch(
        `https://connect-dev.bscdp.com/api/services/clients/BRAINSTATION/veevacrm/dashboard/eventrix/1000/overall-reg-performance?country_iso=DE&event_id=${output}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "cf-access-client-id": "49ba3bf0f63999679d59483cc42ad23c.access",
            "cf-access-client-secret":
              "f6b4480418755f91ed709f51f94722066fa28645389582a990041c85b544b659",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Authorization failed");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const territories = document.querySelector(
            "#overall-registration-performence"
          );
          territories.innerHTML = ''
          for (let i = 0; i < data.length; i++) {
            const territory_list = document.createElement("li");
            territory_list.innerHTML = `<div class="d-flex justify-content-between">
              <h6>${data[i].territory_name}</h6>
              <p class="font-weight-semibold mb-2">
                <span id="total_registrations_north">${data[i].hcp_in_territory_count}</span>
                <span class="text-muted font-weight-normal"
                  >(<span id="total_registrations_north_occupancy"
                    >${data[i].reg_percentage}</span
                  >)</span
                >
              </p>
            </div>
            <div class="progress ht-5">
                          <div
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="60"
                            class="progress-bar wd-60p bg-primary"
                            role="progressbar"
                          ></div>
                        </div>`;
            territories.appendChild(territory_list)
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

// fetch("https://bqm-demo.viquia.com/api/core/service-accounts/token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     client_id: "10001",
//     client_secret: "7e6877395e9613dc0aa0a6cf6a32bc5a",
//   }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Authorization failed");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const token = data.access_token;
//     // Make a GET request to a protected endpoint using the access token for authorization
//     fetch(
//       "https://bqm-demo.viquia.com/api/services/veevacrm/dashboard/:id/eventrix/real-time-users",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Authorization failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         document.querySelector(
//           "#total_registrations_in_target_area"
//         ).innerText = data.total_registrations_in_target_area;
//         document.querySelector(
//           "#total_HCP_registrations_in_target_area"
//         ).innerText = data.total_HCP_registrations_in_target_area;
//         document.querySelector("#acheived_business_goals").innerText =
//           data.acheived_business_goals;
//       })
//       .catch((error) => console.log(error));

//     fetch(
//       "https://bqm-demo.viquia.com/api/services/veevacrm/dashboard/:id/eventrix/reg-performance-overall",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Authorization failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         document.querySelector("#total_registrations_north").innerText = data.total_registrations_north;
//         document.querySelector("#total_registrations_north_occupancy").innerText = data.total_registrations_north_occupancy;

//         document.querySelector("#total_registrations_west").innerText = data.total_registrations_west;
//         document.querySelector("#total_registrations_west_occupancy").innerText = data.total_registrations_west_occupancy;

//         document.querySelector("#total_registrations_south").innerText = data.total_registrations_south;
//         document.querySelector("#total_registrations_south_occupancy").innerText = data.total_registrations_south_occupancy;

//         document.querySelector("#total_registrations_east").innerText = data.total_registrations_east;
//         document.querySelector("#total_registrations_east_occupancy").innerText = data.total_registrations_east_occupancy;
//       })
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));
