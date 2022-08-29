/**
 * @author: by leoven
 */

// import type { ExtractPropTypes } from 'vue'

// export const buttonProps = {
//   size: {
//     type: Number,
//   },
//   color: {
//     type: String,
//   },
// }

// export type ButtonProps = ExtractPropTypes<typeof buttonProps>
const ButtonSize = ['small', 'default', 'large'] as const
const ButtonType = ['primary', 'success', 'warning', 'error', 'info', 'default'] as const
type Size = typeof ButtonSize[number]
type Type = typeof ButtonType[number]
export interface PropsType {
  size: Size
  type: Type
}

// export type ButtonProps = ExtractPropTypes<typeof buttonProps>
