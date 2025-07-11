import { Trans } from 'react-i18next'

import styles from './About.module.css'
type HTMLAnchorElementProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const Link = (props: HTMLAnchorElementProps) => (
  <u>
    <a {...props} title="a link" target="_blank" rel="noopener noreferrer" />
  </u>
)
const About = () => {
  return (
    <div className={styles.container}>
      <Trans
        components={{
          Link: <Link />,
          Heading: <h2>no content</h2>,
          Paragraph: <p />,
          Bold: <b />,
          Underline: <u />,
          Code: <code />,
        }}
        transSupportBasicHtmlNodes={true}
        i18nKey="about.content_html"
      />
    </div>
  )
}
export default About
