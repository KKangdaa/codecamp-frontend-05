import * as A from './FirebaseList.styled'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function firebase() {
  const [dog, setDog] = useState('')

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get(
        'https://dog.ceo/api/breeds/image/random/10'
      )
      setDog(result.data.message)
    }
    fetchDog()
  }, [])

  return (
    <A.Wrapper>
      <A.BoardList>
        <div>
          <img src={dog[0]} />
        </div>
        <div>text</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[1]} />
        </div>
        <div>text</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[2]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[3]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[4]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[5]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[6]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
      <A.BoardList>
        <div>
          <img src={dog[8]} />
        </div>
        <div>{/* <span>text</span> */}</div>
      </A.BoardList>
    </A.Wrapper>
  )
}
