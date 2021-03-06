import styled from "styled-components"

const Article = styled.article`
    display: inline-block;
    width: 370px;
    transition: box-shadow 0.2s ease;
    margin: 40px 10px 0 10px;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;

    & :hover{
        box-shadow: 0px 3px 5px rgba(0, 0, 0,0.2);
    }

    & > img{
        width: inherit;
        border-radius: 5px 5px 0 0;
    }

    & > p{
        margin: 10px 15px;
    }
`

const Picture = ({ photo }) => {
    return (
        <Article>
            <img
                src={photo.urls.regular}
                alt={photo.alt_description}
            />
            <p>
                {
                    [
                        photo.description,
                        photo.alt_description
                    ].join(' - ')
                }
            </p>
        </Article>
    )
}

export default Picture
