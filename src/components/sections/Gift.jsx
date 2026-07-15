import { useState } from 'react'
import { config } from '../../data/config'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function BankCard({ account }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(account.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-cream-50 rounded-lg shadow-md p-5 md:p-6 w-full max-w-sm">
      <p className="font-serif text-xl text-warm-800 mb-1">{account.bank}</p>
      <p className="text-warm-600 text-sm mb-3">{account.accountName}</p>
      <div className="flex items-center justify-between bg-cream-200 rounded-md px-4 py-2">
        <span className="font-medium text-warm-800 tracking-wider">
          {account.accountNumber}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs font-medium uppercase tracking-wide bg-warm-800 text-cream-50 px-3 py-1.5 rounded-full hover:bg-warm-900 transition-colors"
        >
          {copied ? 'Tersalin!' : 'Salin'}
        </button>
      </div>
    </div>
  )
}

function QrisCard({ qris }) {
  return (
    <div className="bg-cream-50 rounded-lg shadow-md p-5 md:p-6 w-full max-w-sm text-center">
      <p className="font-serif text-xl text-warm-800 mb-3">QRIS</p>
      <img
        src={qris.image}
        alt="QRIS Code"
        className="w-full max-w-[220px] mx-auto rounded-md border border-cream-300"
      />
      <p className="text-warm-600 text-xs mt-3 leading-relaxed">{qris.label}</p>
    </div>
  )
}

function AddressCard({ address }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`${address.recipient}\n${address.fullAddress}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-cream-50 rounded-lg shadow-md p-5 md:p-6 w-full max-w-sm">
      <p className="font-serif text-xl text-warm-800 mb-1">{address.recipient}</p>
      <p className="text-warm-600 text-sm mb-3">{address.fullAddress}</p>
      {address.note && (
        <p className="text-warm-500 text-xs italic mb-3">{address.note}</p>
      )}
      <button
        onClick={handleCopy}
        className="w-full text-xs font-medium uppercase tracking-wide bg-warm-800 text-cream-50 px-3 py-2 rounded-full hover:bg-warm-900 transition-colors"
      >
        {copied ? 'Tersalin!' : 'Salin Alamat'}
      </button>
    </div>
  )
}

export default function Gift() {
  const [ref, isVisible] = useScrollReveal()
  const { message, banks, qris, address } = config.gift

  return (
    <section className="section-padding bg-cream-200">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-10 max-w-xl mx-auto px-4`}>
        <p className="ornament">Wedding Gift</p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mt-2 mb-4">
          Kirim Hadiah
        </h2>
        <div className="gold-divider" />
        <p className="text-warm-600 text-sm leading-relaxed">{message}</p>
      </div>

      {/* Rekening bank */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-10 px-4">
        {banks.map((account, index) => (
          <BankCard key={index} account={account} />
        ))}
      </div>

      {/* QRIS / E-wallet */}
      {qris && (
        <div className="flex justify-center mb-10 px-4">
          <QrisCard qris={qris} />
        </div>
      )}

      {/* Alamat fisik */}
      {address && (
        <div className="flex justify-center px-4">
          <AddressCard address={address} />
        </div>
      )}
    </section>
  )
}