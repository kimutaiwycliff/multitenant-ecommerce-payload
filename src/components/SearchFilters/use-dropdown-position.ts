import { RefObject } from "react"

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { top: 0, left: 0 }
    }
    const rect = ref.current.getBoundingClientRect()
    const dropdownWidth = 240

    //Calculate the initial position of the dropdown
    let left = rect.left + window.scrollX
    const top = rect.bottom + window.scrollY

    //Check if the dropdown will be out of the viewport on the right side
    if (left + dropdownWidth > window.innerWidth) {
      //Align to the right edge of the button instead.
      left = rect.right + window.scrollX - dropdownWidth

      //If still off-screen, align to the right edge of the viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth -16
      }

      //Ensure dropdown doesn't go off left edge of viewport
      if (left < 0) {
       left = 16
      }

      return { top, left }
    }
  }
  return {getDropdownPosition}
}
