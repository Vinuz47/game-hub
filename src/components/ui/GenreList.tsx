import useGenre from '@/hooks/useGenre';
import React from 'react'

const GenreList = () => {
    const { genres, error, isLoading } = useGenre();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}
export default GenreList;