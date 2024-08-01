document.getElementById('commentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
    });

    if (response.ok) {
        document.getElementById('message').textContent = 'Comment submitted!';
        loadComments();
    } else {
        document.getElementById('message').textContent = 'Failed to submit comment.';
    }
});

async function loadComments() {
    const response = await fetch('/api/comments');
    const comments = await response.json();

    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.textContent = `${comment.name} (${comment.email}): ${comment.comment}`;
        commentList.appendChild(div);
    });
}

loadComments();
