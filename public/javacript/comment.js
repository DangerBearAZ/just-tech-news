async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    //testing if it works need to declare 2 varia when subitted consal log both
    // console.log(comment_text, post_id);
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
    }
    
    document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
    