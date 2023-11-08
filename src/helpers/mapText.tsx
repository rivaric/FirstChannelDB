import Link from 'antd/lib/typography/Link'

export const mapText = (text: string, withFilter = true) => {
  const paragraphs = text.split('\n')

  const filtered = withFilter ? paragraphs.filter(item => !!item) : paragraphs

  const withBr = filtered.flatMap((item, index) => ([
    item,
    <br key={index}/>
  ]))

  const links = withBr.map(item => {
    if (typeof item === 'string' && item.slice(0, 4) === 'http') {
      return (
        <Link href={item} target="_blank" style={{ fontSize: '16px' }} key={item}>
          {item}
        </Link>
      )
    }
    return item
  })

  return links
}