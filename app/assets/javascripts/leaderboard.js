// Leaderboard JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  initializeChosen();
  initializePerPageSelector();
});

function initializeChosen() {
  if (
    typeof jQuery !== "undefined" &&
    typeof jQuery.fn.chosen !== "undefined"
  ) {
    $("#player-select").chosen({
      placeholder_text_single: "Search by player name...",
      no_results_text: "No players found",
      search_contains: true,
      width: "100%",
      allow_single_deselect: true,
    });

    // Custom styling for Chosen.js
    $("<style>")
      .prop("type", "text/css")
      .html(
        `
        .chosen-container-single {
          height: 48px !important;
          line-height: 48px !important;
        }
        .chosen-container-single .chosen-single {
          background: linear-gradient(to right, #ffffff, #f8fafc) !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          height: 48px !important;
          line-height: 48px !important;
          padding: 0 1rem !important;
          font-weight: 500 !important;
          color: #374151 !important;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
          transition: all 0.2s ease !important;
          display: flex !important;
          align-items: center !important;
        }
        .chosen-container-single .chosen-single:hover {
          border-color: #3b82f6 !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        .chosen-container-single.chosen-container-active .chosen-single {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
        .chosen-container-single .chosen-single span {
          line-height: 48px !important;
          height: 48px !important;
          display: flex !important;
          align-items: center !important;
        }
        .chosen-container-single .chosen-single div {
          height: 48px !important;
          line-height: 48px !important;
          display: flex !important;
          align-items: center !important;
        }
        .chosen-container .chosen-drop {
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          margin-top: 0.25rem !important;
        }
        .chosen-container .chosen-results li {
          padding: 0.75rem 1rem !important;
          font-weight: 500 !important;
          color: #374151 !important;
          line-height: 1.5 !important;
        }
        .chosen-container .chosen-results li:hover {
          background: linear-gradient(to right, #eff6ff, #dbeafe) !important;
          color: #1e40af !important;
        }
        .chosen-container .chosen-results li.highlighted {
          background: linear-gradient(to right, #3b82f6, #2563eb) !important;
          color: white !important;
        }
        .chosen-container .chosen-search input {
          border: 1px solid #d1d5db !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem 0.75rem !important;
          font-weight: 500 !important;
          height: 36px !important;
        }
        .chosen-container .chosen-search input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
      `
      )
      .appendTo("head");
  }
}

function initializePerPageSelector() {
  const perPageSelect = document.getElementById("per-page-select");
  if (perPageSelect) {
    perPageSelect.addEventListener("change", function () {
      const currentUrl = new URL(window.location);
      currentUrl.searchParams.set("per_page", this.value);
      currentUrl.searchParams.delete("page"); // Reset to first page when changing per_page
      window.location.href = currentUrl.toString();
    });
  }
}

// Export data function
function exportData() {
  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get("search") || "";

  fetch(`/leaderboards/export.json?search=${encodeURIComponent(search)}`)
    .then((response) => response.json())
    .then((data) => {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        "leaderboard_data_" + new Date().toISOString().split("T")[0] + ".json";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((error) => {
      console.error("Export failed:", error);
      alert("Export failed. Please try again.");
    });
}

// Make exportData available globally
window.exportData = exportData;
