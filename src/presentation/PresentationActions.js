/**
 * Created by personal on 15/12/2015.
 */
export const ActionTypes = {
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  NEXT_PAGE: 'NEXT_PAGE',
  PREVIOUS_PAGE: 'PREVIOUS_PAGE'
}

export const updateTitle = (idx, title) => ({
  type: ActionTypes.UPDATE_TITLE,
  idx,
  title
})

export const updateContent = (idx, content) => ({
  type: ActionTypes.UPDATE_CONTENT,
  idx,
  content
})

export const nextPage = () => ({
  type: ActionTypes.NEXT_PAGE
})

export const previousPage = () => ({
  type: ActionTypes.PREVIOUS_PAGE
})
