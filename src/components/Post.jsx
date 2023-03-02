import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt }) {

  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateTitleFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  function handleCreateNewComment(){
    event.preventDefault()
    const newCommentText = event.target.comment.value
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleDeleteComment(commentToDelete){
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithoutDeleteOne)
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }
  const isNewCommentEmpty = newCommentText.length === 0
  return (
    <article className={ styles.post }>
      <header className={ styles.header }>
        <div className={ styles.author }>
          <Avatar
            src={ author.avatarUrl }
          />
          <div className={ styles.authorInfo }>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={ publishedDateTitleFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={ line.content }>{ line.content }</p>;
          } else if (line.type === 'link') {
            <p key={ line.content }><a href="#">{ line.content }</a></p>;
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={ newCommentText }
          onChange={ handleNewCommentChange }
          placeholder="Escreva um comentário..."
          onInvalid={ handleCommentInvalid }
          required
        />
        <footer>
          <button
            type="submit"
            disabled={ isNewCommentEmpty }
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className={ styles.commentList }>
        {
          comments.map((comment) => {
            return (
            <Comment
              key={comment }
              onDeleteComment={ handleDeleteComment }
              content={ comment }
            />
            )
          })
        }
      </div>
    </article>
  );
}
