import Projects from './projects.js'

export default function initNewUser(userId, info) {
  if (Meteor.settings.public.sandstorm) {
    Projects.insert({
      userId,
      name: `${info.profile.name}'s Default Project`,
      desc: 'This project has been automatically created for you, feel free to change it!',
      public: true })
  } else {
    Projects.insert({
      userId,
      name: `${info.profile.name}'s Default Project`,
      desc: 'This project has been automatically created for you, feel free to change it!' })
  }
}