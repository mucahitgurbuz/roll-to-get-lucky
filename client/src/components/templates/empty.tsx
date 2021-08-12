import React, { PropsWithChildren } from 'react'

export function Empty(props: PropsWithChildren<any>) {
  return <> {props.children}</>
}
