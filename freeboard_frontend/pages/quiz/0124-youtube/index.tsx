import ReactPlayer from 'react-player'

export default function YoutubeVideo () {
	return(
		<ReactPlayer
            url={'https://youtu.be/XpLZQErkvK8'}
            width={'800px'}
            height={'600px'}
            controls
            muted
          />	
	)
}