import React from 'react';


function RenderComments({comment}) {
	return(
        <p>
            <div>{comment.comment}</div>
            <div>{comment.author}</div>
            <div>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
        </p>            
	);
}


function Comments(props) {
    const menu = props.comments.map((comment) => { console.log(comment)
        return (
            <div>
                <RenderComments comment={comment} />
            </div>
        );
    });

    return (
        <div>{menu}</div>
    )
}

export default Comments;