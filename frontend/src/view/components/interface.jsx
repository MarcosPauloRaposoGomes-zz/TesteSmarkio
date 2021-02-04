import Api from '../../services/api'
import React, { useEffect, useState } from "react"
import './App.scss';

export default function Interface(props) {
    const [data, setData] = useState({});
    const [input, setInput] = useState({})

    async function getAllComments() {
        var res = Api.getAllComments();
        if (res.status === 200) {
            setData(res.data)
        }
    }

    async function createComment() {
        var res = Api.createComment(input);
        if (res.status === 200) {
            getAllComments();
        }
    }

    async function listenAudio(){
        var res = Api.listenAudio(input);
        if (res.status === 200) {
            //getAllComments();
        }
    }

    useEffect(() => {
        getAllComments()
    }, [])

    return (
        <div className="container">
            <section className="container-interface">
                <section className="container-input-comment">
                        <h3 className="title">Comentário</h3>
                    <form>
                        <textarea onChange={(e) => setInput(e)}></textarea>
                        <button type="submit" onClick={() => createComment}>Cadastrar</button>
                    </form>
                </section>
                <section className="container-output-comments">
                    <h3 className="title">Comentários</h3>
                    <ul className="comment-list">
                        {data.map(comment=>
                        <li className="comment-item">
                            <h5 className="comment-content">{comment.content}</h5>
                            <button type="button" onclick={() => listenAudio}>Ouvir</button>
                        </li>
                        )} 
                    </ul>
                </section>
            </section>
        </div>
    )
}