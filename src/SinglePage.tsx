import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Photo {
    userId: number;
    id: number;
    title: string;
    thumbnailUrl: string;
  }

export function SinglePage() {
    const {id} = useParams();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then(res => res.json())
            .then((data: Photo[]) => setPhotos(data))
            .catch(error => console.error("Error fetching albums:", error));
    }, [id])

    return(
        <>
            {photos &&(
                <>
                    <h1>{photos.title}</h1>
                    <p>{photos.id}</p>
                    {/* <img src={photo.id} alt={photo.title} /> */}
                    <ul>
                        {photos.map((photo) => (
                            <li key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                                <p>{photo.title}</p>
                            </li>
                        ))}
                        </ul>
                    <Link to="/albums">Back to Albums</Link>
                    {/* <p>{pohoto.thumbnailUrl}</p> */}
                </>
            )

            }
        </>
    )
}