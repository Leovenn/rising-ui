/**
 * @author: by leoven
 */
import type { ExtractPropTypes } from 'vue'

export const buttonProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
