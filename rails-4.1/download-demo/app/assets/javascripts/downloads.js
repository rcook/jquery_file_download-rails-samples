$(function () {
  $("#download").on("click", function (e) {
    e.preventDefault();
    $.fileDownload($(this).prop("href"), {
      successCallback: function (url) { alert("Success"); },
      failCallback: function (url) { alert("Fail"); }
    });
  });
});

