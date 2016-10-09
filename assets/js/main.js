$(document).ready(function (){
    $("#suggest-btn").click(function (){
        slack = 'https://hooks.slack.com/services/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';
        payload = {
            text: $("#suggest-input").val()
        }

        $.post(slack, {
            payload: JSON.stringify(payload)
        });

        $("#suggest-input").val("");
        $("#suggest-txt").html("Thank you!");
    });
});
