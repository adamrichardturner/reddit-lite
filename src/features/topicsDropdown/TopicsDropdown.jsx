import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateActiveTopic } from '../topics/topicsSlice'

export const TopicsDropdown = () => {
  const dispatch = useDispatch()
  // Get topics from state
  const topics = useSelector((state) => state.topics.topics)
  // Change handler for the Select box
  const handleChange = (event) => {
    dispatch(updateActiveTopic(event.target.value))
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Topics</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value=''
          onChange={handleChange}
          autoWidth
          label='Select Topic'
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            PaperProps: {
              style: {
                maxHeight: '70vh', // or any other desired value
              },
            },
            getContentAnchorEl: null, // This prevents the menu from being positioned based on the content's anchor element
          }}
        >
          <MenuItem value=''>
            <em>Topics</em>
          </MenuItem>
          {topics.map((topic) => {
            return (
              <MenuItem key={topic.name} value={topic.url}>
                {topic.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
