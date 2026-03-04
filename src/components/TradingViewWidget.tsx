import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

interface TradingViewWidgetProps {
  symbol?: string
  theme?: 'light' | 'dark'
  height?: number | string
  border?: string
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  symbol = 'BINANCE:BTCUSD',
  theme = 'dark',
  height = 500,
  border = '1px solid',
}) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Nettoyage pour éviter les doublons lors des re-rendus React (Strict Mode)
    if (container.current && container.current.innerHTML !== '') {
      container.current.innerHTML = ''
    }

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${symbol}",
        "interval": "60",
        "timezone": "Etc/UTC",
        "theme": "${theme}",
        "style": "1",
        "locale": "fr",
        "enable_publishing": false,
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "gridColor": "rgba(255, 255, 255, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "container_id": "tradingview_widget"
      }`

    if (container.current) {
      container.current.appendChild(script)
    }

    return () => {
      // Cleanup effect runs on unmount
      if (container.current) {
        container.current.innerHTML = ''
      }
    }
  }, [symbol, theme])

  return (
    <Box
      sx={{
        height: height,
        width: '100%',
        borderRadius: border !== 'none' ? 2 : 0,
        overflow: 'hidden',
        border: border,
        borderColor: border !== 'none' ? 'divider' : 'transparent',
        position: 'relative',
        zIndex: 1, // Évite que le widget passe par-dessus d'autres éléments flottants
      }}
      className="tradingview-widget-container"
    >
      <div id="tradingview_widget" ref={container} style={{ height: '100%', width: '100%' }} />
    </Box>
  )
}

export default TradingViewWidget
