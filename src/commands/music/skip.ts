import { Command, MessageProps } from '../../@interfaces'

const skip: Command = {
  regex: /^s|skip(\s|$)/,

  callback ( props: MessageProps ) {
    if (props.member.voice.channel && props.member.voice.channel.id === props.queue.channel.id) {
      props.music.playNext()
    }
  }
}

export default skip
