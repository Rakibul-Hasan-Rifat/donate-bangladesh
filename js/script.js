document.getElementById("history_btn").addEventListener("click", function (e) {
  document.getElementById("history").className = "";
  document.getElementById("donation").className = "hidden";
  document.getElementById("history_btn").className =
    "px-8 py-3 rounded-lg bg-[#B4F461]";
  document.getElementById("donation_btn").className =
    "px-8 py-3 rounded-lg border border-gray-500 text-[#111111b3]";
});
document.getElementById("donation_btn").addEventListener("click", function (e) {
  document.getElementById("donation").className = "";
  document.getElementById("history").className = "hidden";
  document.getElementById("donation_btn").className =
    "px-8 py-3 rounded-lg bg-[#B4F461]";
  document.getElementById("history_btn").className =
    "px-8 py-3 rounded-lg border border-gray-500 text-[#111111b3]";
});

document
  .getElementById("noakhali_donation_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    donate(
      "noakhali_donation_input",
      "noakhali_donation_amount",
      "noakhali_donation_title"
    );
  });

document
  .getElementById("feni_donation_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    donate(
      "feni_donation_input",
      "feni_donation_amount",
      "feni_donation_title"
    );
  });

document
  .getElementById("protest_donation_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    donate(
      "protest_donation_input",
      "protest_donation_amount",
      "protest_donation_title"
    );
  });

  
let historyOfDonation = [];

function donate(donationInputID, previousDonationID, donationTitleID) {
  const donationInputElement = document.getElementById(donationInputID);
  const donationTitleElement = document.getElementById(donationTitleID);
  const previousDonationElement = document.getElementById(previousDonationID);

  const userTotalAmount = parseInt(
    document.getElementById("total_amount").innerText
  );
  const donationInputAmount = parseInt(donationInputElement.value);
  const prevDonationAmount = parseInt(previousDonationElement.innerText);

  previousDonationElement.innerText = prevDonationAmount + donationInputAmount;
  document.getElementById("total_amount").innerText =
    userTotalAmount - donationInputAmount;

  const donationInfo = {
    dateOfDonation: new Date(),
    totalDonation: prevDonationAmount + donationInputAmount,
    donationPurpose: donationTitleElement.innerText,
  };

  historyOfDonation.length > 0 &&
    historyOfDonation.forEach(function (info, i) {
      console.log(info.donationPurpose, donationTitleElement.innerText);
      if (info.donationPurpose === donationTitleElement.innerText) {
        historyOfDonation.splice(i, 1);
      }
    });

  historyOfDonation.push(donationInfo);

  donationInputElement.value = "";
}
