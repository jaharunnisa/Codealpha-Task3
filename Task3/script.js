$(document).ready(function () {
    const issueForm = $('#issueForm');
    const issueList = $('#issueList');
    const createIssueForm = $('#createIssueForm');

    let issueCounter = 1; 

    createIssueForm.submit(function (event) {
        event.preventDefault();
        if (validateForm()) {
            createIssue();
        }
    });
    function validateForm() {
        return true;
    }

    function createIssue() {
        const title = `Issue ${issueCounter}`; 
        const assignee = $('#assignee').val();
        const priority = $('#priority').val();
        const description = $('#description').val();
        const attachment = $('#attachment').val(); 

        const issueElement = $('<div class="issue-card">').html(`
            <h3>${title}</h3>
            <p>Assignee: ${assignee}</p>
            <p>Priority: ${priority}</p>
            <p>${description}</p>
        `);

        $('#createIssueForm').parent().append(issueElement);
        issueCounter++;

        createIssueForm[0].reset();
        
        alert('Issue created successfully!');
    }
});
