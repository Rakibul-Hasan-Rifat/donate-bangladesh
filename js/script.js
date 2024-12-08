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
    donate("noakhali_donation_input", "noakhali_donation_amount");
  });

document
  .getElementById("feni_donation_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    donate("feni_donation_input", "feni_donation_amount");
  });

document
  .getElementById("protest_donation_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    donate("protest_donation_input", "protest_donation_amount");
  });

function donate(donationInputID, previousDonationID) {
  const donationInputElement = document.getElementById(donationInputID);
  const previousDonationElement = document.getElementById(previousDonationID);

  const userTotalAmount = parseInt(
    document.getElementById("total_amount").innerText
  );
  const donationInputAmount = parseInt(donationInputElement.value);
  const prevDonationAmount = parseInt(previousDonationElement.innerText);

  previousDonationElement.innerText = prevDonationAmount + donationInputAmount;
  document.getElementById("total_amount").innerText =
    userTotalAmount - donationInputAmount;

  donationInputElement.value = "";
}
