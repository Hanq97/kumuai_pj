"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
  buttons?: ChatButton[]
}

interface ChatButton {
  label: string
  action: string
}

type ConversationState = 
  | "initial"
  | "law_worry"
  | "excel_limit"
  | "deadline_fear"
  | "want_demo"
  | "scale_selected"
  | "contact_request"
  | "fallback"
  | "completed"

const initialMessage: Message = {
  id: 1,
  text: "はじめまして。\n2027年・育成就労制度への対応について、今いちばんお困りの点はどれでしょうか？",
  isBot: true,
  timestamp: new Date(),
  buttons: [
    { label: "法改正・書類対応が不安", action: "law_worry" },
    { label: "Excel管理が限界", action: "excel_limit" },
    { label: "在留期限・報告期限が怖い", action: "deadline_fear" },
    { label: "システムのデモを見たい", action: "want_demo" }
  ]
}

const responses: { [key: string]: { text: string; buttons?: ChatButton[] } } = {
  law_worry: {
    text: "多くの監理団体・登録支援機関様が、同じ不安を抱えています。\n\nゼロマネなら\n・入管・OTIT様式に完全対応\n・法改正時も自動アップデート\n・書類作成はワンクリック\n\nご希望はどちらでしょうか？",
    buttons: [
      { label: "無料デモを予約する", action: "contact_demo" },
      { label: "資料をダウンロード", action: "contact_document" },
      { label: "担当者に相談する", action: "contact_consult" }
    ]
  },
  excel_limit: {
    text: "Excel管理は、\n・ファイル破損\n・最新版が分からない\n・引き継ぎ不可\nといったリスクが高くなります。\n\nゼロマネでは\n・既存Excelを一括取込\n・データを一元管理\n・期限を自動監視します。\n\n現在の管理人数を教えてください。",
    buttons: [
      { label: "50名未満", action: "scale_small" },
      { label: "50〜200名", action: "scale_medium" },
      { label: "200名以上", action: "scale_large" }
    ]
  },
  deadline_fear: {
    text: "最も危険なのは「忘れてしまうこと」です。\n\nゼロマネは\n・在留期限を4ヶ月前から自動通知\n・対応履歴を完全記録\n・「言った・言わない」を防止\n\nご確認されますか？",
    buttons: [
      { label: "期限管理の仕組みを見る", action: "contact_demo" },
      { label: "30日間無料で試す", action: "contact_trial" }
    ]
  },
  want_demo: {
    text: "ありがとうございます。\nご希望の方法をお選びください。",
    buttons: [
      { label: "オンラインデモ（30分）", action: "contact_demo" },
      { label: "30日間無料トライアル", action: "contact_trial" },
      { label: "まずは資料を見る", action: "contact_document" }
    ]
  },
  scale_small: {
    text: "50名未満の規模であれば、事務作業を60〜80％削減できます。\n\n次に進みますか？",
    buttons: [
      { label: "無料デモを予約", action: "contact_demo" },
      { label: "資料をダウンロード", action: "contact_document" }
    ]
  },
  scale_medium: {
    text: "50〜200名の規模であれば、事務作業を60〜80％削減できます。\n\n次に進みますか？",
    buttons: [
      { label: "無料デモを予約", action: "contact_demo" },
      { label: "資料をダウンロード", action: "contact_document" }
    ]
  },
  scale_large: {
    text: "200名以上の規模であれば、事務作業を60〜80％削減できます。大規模組織向けのプランもございます。\n\n次に進みますか？",
    buttons: [
      { label: "無料デモを予約", action: "contact_demo" },
      { label: "資料をダウンロード", action: "contact_document" }
    ]
  },
  contact_demo: {
    text: "オンラインデモのご予約ありがとうございます。\n最短でご案内するため、ご連絡先を教えてください。",
    buttons: [
      { label: "メールで連絡希望", action: "request_email" },
      { label: "電話で連絡希望", action: "request_phone" },
      { label: "後で連絡する", action: "later" }
    ]
  },
  contact_trial: {
    text: "30日間無料トライアルのお申し込みありがとうございます。\n最短でご案内するため、ご連絡先を教えてください。",
    buttons: [
      { label: "メールで連絡希望", action: "request_email" },
      { label: "電話で連絡希望", action: "request_phone" },
      { label: "後で連絡する", action: "later" }
    ]
  },
  contact_document: {
    text: "資料ダウンロードのご希望ありがとうございます。\n資料送付先を教えてください。",
    buttons: [
      { label: "メールで受け取る", action: "request_email" },
      { label: "後で連絡する", action: "later" }
    ]
  },
  contact_consult: {
    text: "担当者へのご相談ありがとうございます。\n最短でご案内するため、ご連絡先を教えてください。",
    buttons: [
      { label: "メールで連絡希望", action: "request_email" },
      { label: "電話で連絡希望", action: "request_phone" },
      { label: "後で連絡する", action: "later" }
    ]
  },
  request_email: {
    text: "メールアドレスを入力してください。"
  },
  request_phone: {
    text: "電話番号を入力してください。"
  },
  later: {
    text: "承知いたしました。\nまたいつでもご連絡ください。\n\nページ下部のお問い合わせフォームからもご連絡いただけます。",
    buttons: [
      { label: "最初に戻る", action: "restart" }
    ]
  },
  completed: {
    text: "ありがとうございます。\n担当者より営業時間内（平日9:00-18:00）にご連絡いたします。",
    buttons: [
      { label: "最初に戻る", action: "restart" }
    ]
  },
  fallback: {
    text: "申し訳ありません。その内容は自動対応が難しいため、担当者へおつなぎします。",
    buttons: [
      { label: "はい、お願いします", action: "contact_consult" },
      { label: "後で連絡する", action: "later" }
    ]
  }
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentState, setCurrentState] = useState<ConversationState>("initial")
  const [awaitingInput, setAwaitingInput] = useState<"email" | "phone" | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addBotMessage = async (responseKey: string) => {
    setIsTyping(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const response = responses[responseKey]
    if (response) {
      const botMessage: Message = {
        id: Date.now(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        buttons: response.buttons
      }
      setMessages(prev => [...prev, botMessage])
    }
    setIsTyping(false)
  }

  const handleButtonClick = async (action: string) => {
    // Add user selection as message
    const buttonLabel = messages[messages.length - 1]?.buttons?.find(b => b.action === action)?.label
    if (buttonLabel) {
      const userMessage: Message = {
        id: Date.now(),
        text: buttonLabel,
        isBot: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
    }

    // Handle special actions
    if (action === "restart") {
      await new Promise(resolve => setTimeout(resolve, 500))
      setMessages([initialMessage])
      setCurrentState("initial")
      setAwaitingInput(null)
      return
    }

    if (action === "request_email") {
      setAwaitingInput("email")
      await addBotMessage("request_email")
      return
    }

    if (action === "request_phone") {
      setAwaitingInput("phone")
      await addBotMessage("request_phone")
      return
    }

    // Normal flow
    setCurrentState(action as ConversationState)
    await addBotMessage(action)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const userInput = inputValue
    setInputValue("")

    // Handle awaiting input (email or phone)
    if (awaitingInput) {
      const isValidEmail = awaitingInput === "email" && userInput.includes("@")
      const isValidPhone = awaitingInput === "phone" && /[\d\-+]+/.test(userInput)
      
      if (isValidEmail || isValidPhone) {
        setAwaitingInput(null)
        await addBotMessage("completed")
        setCurrentState("completed")
      } else {
        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        const errorMessage: Message = {
          id: Date.now(),
          text: awaitingInput === "email" 
            ? "正しいメールアドレスを入力してください。" 
            : "正しい電話番号を入力してください。",
          isBot: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
        setIsTyping(false)
      }
      return
    }

    // Free text - show fallback
    await addBotMessage("fallback")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center ${isOpen ? "scale-0" : "scale-100"}`}
        aria-label="チャットを開く"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-xl shadow-2xl border border-border transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">ゼロマネ</h3>
              <p className="text-xs text-primary-foreground/70">24時間対応</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
            aria-label="チャットを閉じる"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              <div className={`flex gap-3 ${message.isBot ? "" : "flex-row-reverse"}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${message.isBot ? "bg-primary/10" : "bg-accent/10"}`}>
                  {message.isBot ? (
                    <Bot className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4 text-accent" />
                  )}
                </div>
                <div 
                  className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                    message.isBot 
                      ? "bg-secondary text-foreground rounded-tl-none" 
                      : "bg-accent text-accent-foreground rounded-tr-none"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < message.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Buttons */}
              {message.isBot && message.buttons && message.id === messages[messages.length - 1]?.id && !isTyping && (
                <div className="mt-3 ml-11 flex flex-col gap-2">
                  {message.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleButtonClick(button.action)}
                      className="text-left px-4 py-2.5 text-sm bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-secondary px-4 py-3 rounded-xl rounded-tl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={awaitingInput === "email" ? "example@email.com" : awaitingInput === "phone" ? "090-XXXX-XXXX" : "メッセージを入力..."}
              className="flex-1 bg-background"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
