import React from 'react'

import './styles.css'

export const Logo = props => (
  <svg
    width={568.59}
    height={78.82}
    viewBox='-34.295 35.59 568.59 78.82'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='prefix__editing-sticker-gradient'
        x1={0.5}
        y1={0.2}
        x2={0.5}
        y2={0.8}
      >
        <stop offset={0} stopColor='#fd9' />
        <stop offset={1} stopColor='#9df' />
      </linearGradient>
      <filter
        id='prefix__editing-sticker'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feMorphology radius={1} in='SourceAlpha' result='alpha-erode' />
        <feConvolveMatrix
          order='3,3'
          divisor={1}
          kernelMatrix='0 1 0 1 1 1 0 1 0'
          in='alpha-erode'
          result='alpha-round'
        />
        <feMorphology
          operator='dilate'
          radius={3.5}
          in='alpha-round'
          result='dilate-shadow'
        />
        <feGaussianBlur in='dilate-shadow' stdDeviation={1.5} result='shadow' />
        <feFlood floodColor='#fff' result='flood-sticker' />
        <feComposite
          operator='in'
          in='flood-sticker'
          in2='alpha-round'
          result='comp-sticker'
        />
        <feMorphology
          operator='dilate'
          radius={3}
          in='comp-sticker'
          result='morph-sticker'
        />
        <feConvolveMatrix
          order='3,3'
          divisor={1}
          kernelMatrix='0 1 0 1 1 1 0 1 0'
          in='morph-sticker'
          result='sticker'
        />
        <feMerge>
          <feMergeNode in='shadow' />
          <feMergeNode in='sticker' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#prefix__editing-sticker)'>
      <path
        d='M6.27 0L-.24-18.15h7.21L9.93-8.7l2.1-6.54 2.72 8.35L12.6.02 12.58 0H6.27zm11.98 0l-6.12-18.15h7.13L25.1 0h-6.85zm13.54-18.15L25.86-1.13l-3.18-9.77 2.03-7.25h7.08zM33.33 0v-25.07h7.55V0h-7.55zm12.08 0v-13.62h-3.33v-2.29l2.22-2.24h4.13l4.55 4.53V0h-7.57zm18.37-18.15V0h-3.03l-4.52-4.53v-9.09l4.52-4.53h3.03zM75.91-7.28H64.98v-3.16h3.98v-3.18h-3.98v-4.53h6.4l4.53 4.53v6.34zM72.87 0h-7.89v-4.24h10.15v1.97L72.87 0zm18.24-9.21v-4.41h-3.22v-1.98l2.53-2.55H95l3.68 4.24v4.7h-7.57zM86.68 0h-7.55v-18.15h7.55V0zm21.72-18.15V0h-3.02l-4.53-4.53v-9.09l4.53-4.53h3.02zm12.13 10.87H109.6v-3.16h3.98v-3.18h-3.98v-4.53h6.41l4.52 4.53v6.34zM117.49 0h-7.89v-4.24h10.15v1.97L117.49 0zm15.33 0v-18.15h7.57V0h-7.57zm0-20.41v-4.81h7.57v4.81h-7.57zm11.01 6.33l4.08-4.07h3.03v6.41h8.61l3.93 3.96v3.54L159.26 0h-3.33v-6.85h-8.17l-3.93-3.78v-3.45zm7.55 8.88v1.87h3.35V0l-7.77-.02-3.15-3.72V-5.2h7.57zm4.55-8.2v-1.42h-3.8v-3.33h8.04l2.7 2.7v2.05h-6.94zm27.32-9.28v18.15h4.99V0h-7.99l-4.55-4.53v-9.09h-1.5v-4.53h1.5v-1.96l7.55-2.57zm5.27 9.06h-4.07v-4.53h4.07v4.53zM191.13 0v-25.07h7.56V0h-7.56zm12.09 0v-13.62h-3.34v-2.29l2.22-2.24h4.14l4.55 4.53V0h-7.57zm18.37-18.15V0h-3.03l-4.53-4.53v-9.09l4.53-4.53h3.03zm12.13 10.87h-10.94v-3.16h3.99v-3.18h-3.99v-4.53h6.41l4.53 4.53v6.34zM230.68 0h-7.9v-4.24h10.15v1.97L230.68 0zm26.25-4.53V0h-6.7l-4.24-4.24v-20.83h7.55v20.54h3.39zM258.88 0v-18.15h7.57V0h-7.57zm0-20.41v-4.81h7.57v4.81h-7.57zm11.14-4.66h7.55V0h-7.55v-25.07zm12.13 20.83v-9.38h-3.38v-2.29l2.22-2.24h4.14l4.54 4.53v9.09L285.13 0h-6.36v-4.24h3.38zm22.75-4.97v-4.41h-3.21v-1.98l2.53-2.55h4.58l3.67 4.24v4.7h-7.57zM300.47 0h-7.55v-18.15h7.55V0zm33.67 0h-7.38v-13.62h-10.75v-2.26l2.27-2.27h11.33l4.53 4.53V0zm-16.61-10.56h8.03v3.14h-3.89v3.18h3.89v2L323.31 0h-5.78l-3.04-2.99v-4.55l3.04-3.02zm31.99 1.35v-4.41h-3.21v-1.98l2.53-2.55h4.58l3.67 4.24v4.7h-7.57zM345.1 0h-7.56v-18.15h7.56V0zm33.65-18.15l-9.22 24.47h-7.24l9.19-24.47h7.27zM364.1-1.52l-6.7-16.63h7.54l2.54 7.38-3.38 9.25zm20.3-21.16h12.26l4.52 4.53v3.93l-4.52 4.55h-3.25v2.12h-7.59v-2.12l4.55-4.55h3.26v-3.93h-6.2v2.27h-7.57v-2.24l4.54-4.56zM385.82 0v-5.28h7.59V0h-7.59z'
        fill='url(#prefix__editing-sticker-gradient)'
        stroke='#000'
        strokeWidth={2.5}
        transform='translate(49.093 90.63)'
      />
    </g>
    <style />
  </svg>
)

export const Header = () => (
  <div className='Header'>
    <Logo />
  </div>
)
