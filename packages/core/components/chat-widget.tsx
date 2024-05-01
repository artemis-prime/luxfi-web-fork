'use client'
import React from 'react'

import { Button, Card } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import LuxLogo from './icons/lux-logo'
import type { ChatbotSuggestedQuestion } from '../types'

import LuxLogo from './icons/lux-logo'
import type { ChatbotSuggestedQuestion } from '../types'

const ChatWidget: React.FC<{
  title: string
  chatbotUrl: string
  subtitle?: string
  question?: string
  chatClx?: string
  buttonClx?: string
  /* 
    ChatBotSuggestQuestion.icon
    Currently supports these icons from remix icons (https://remixicon.com/):
      GlobalLineIcon,
      ShieldFlashLineIcon,
      BankCardLineIcon,
      GroupLineIcon,
      QuestionnaireLineIcon
  */
  suggestedQuestions?: ChatbotSuggestedQuestion[]
}> = ({
  title,
  chatbotUrl,
  subtitle,
  question,
  chatClx='',
  buttonClx='',
  suggestedQuestions
}) => {

  const [showChatbot, setShowChatbot] = React.useState<boolean>(false)

  const toggleShow = () => { setShowChatbot(!showChatbot) }

  const searchParams = new URLSearchParams()
  if (question) {
    searchParams.append('question', question)
  }
  if (suggestedQuestions) {
    searchParams.append('sQuestions', suggestedQuestions.map(({ message }) => message).join(','))
    searchParams.append('sHeadings', suggestedQuestions.map(({ heading }) => heading).join(','))
    searchParams.append('sIcons', suggestedQuestions.map(({ icon }) => icon).join(','))
  }

  const iframeSrc = `${chatbotUrl}?${searchParams.toString()}`

  return (<>
    <div className={cn(chatClx, (showChatbot ? 'flex' : 'hidden'))}>
      <Card className='flex flex-col h-full w-full'>
        <div className='flex px-4 py-2 h-12 bg-level-0 items-center justify-between'>
          <h3 className='font-semibold font-heading'>{title} <span className='opacity-60'>{subtitle}</span></h3>
          <Button onClick={toggleShow} variant='link' size='icon' className='w-fit sm:hidden'>
            <LuxLogo width={24} height={24}/>
          </Button>
        </div>
        <iframe src={iframeSrc} className='h-full' />
      </Card>
    </div>W

    <Button 
      variant='ghost' 
      rounded='full' 
      size='lg' 
      onClick={toggleShow} 
      className={cn(
        buttonClx, 
        //'border border-foreground',
        'flex justify-center items-center',
        'group hover:bg-transparent !min-w-0 px-1 py-1 aspect-square'
      )}
    >
      <LuxLogo
        width={28}
        height={28}
        className={cn(
          //'border border-foreground',
          'transition-drop-shadow cursor-pointer group-hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,1)]',
          showChatbot ? 'rotate-180' : ''
        )}
        strokeWidth={1}
      />
    </Button>
  </>)
}

export default ChatWidget
