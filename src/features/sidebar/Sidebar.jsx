import Styles from './Sidebar.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTopics } from '../../util/Reddit'
import { addTopic, updateActiveTopic } from '../topics/topicsSlice'
import redditLogo from './reddit-logo.png'

export const Sidebar = () => {
  // Get activeTopic to change styling of actively selected sidebar item
  const activeTopic = useSelector((state) => state.topics.activeTopic)
  // Store in topics our topics in state
  const topics = useSelector((state) => state.topics.topics)
  const dispatch = useDispatch()

  // Render our topics and dispatch to state
  useEffect(() => {
    const fetchTopics = async () => {
      const topics = await getTopics()
      topics.forEach((topic) => {
        const { display_name, url, id, community_icon } = topic
        dispatch(
          addTopic({
            name: display_name,
            url,
            id,
            icon: community_icon.split('?')[0],
          })
        )
      })
    }

    fetchTopics()
  }, [dispatch])

  // Iterate over topics drawn from state and render Link elements
  return (
    <>
      <section className='sideBar' style={Styles}>
        <h2>Topics</h2>
        <ul>
          {topics.map((topic) => (
            <Link to='/' key={topic.id}>
              <li
                onClick={() => dispatch(updateActiveTopic(topic.url))}
                className={
                  activeTopic === topic.url ? 'activeTopic' : undefined
                }
              >
                <img
                  src={topic.icon}
                  alt=''
                  height='25'
                  onError={(e) => (e.target.src = redditLogo)}
                />
                {topic.name}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  )
}
