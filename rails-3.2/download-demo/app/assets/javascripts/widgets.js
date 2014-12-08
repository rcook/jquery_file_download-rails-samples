$(function () {
  $("#generate-widget").on("click", function (e) {
    e.preventDefault();
    var form = $(this).closest("form");
    var url = form.prop("action") + "/file";
    $.fileDownload(url, {
      httpMethod: "POST",
      data: form.serialize()
    });
  });
});

