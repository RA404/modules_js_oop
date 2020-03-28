export class UserInfo {
  constructor(userInfoContainer, userAvatar, api, resourcePath,token_key) {
    this.userInfoContainer = userInfoContainer;
    this.userNameContainer = this.userInfoContainer.querySelector('.user-info__name');
    this.userDescriptionContainer = this.userInfoContainer.querySelector('.user-info__job');
    this.nameResearcher = this.userNameContainer.textContent;
    this.aboutResearcher = this.userDescriptionContainer.textContent;
    this.avatar = userAvatar;
    this.api = api;
    this.serverPath = resourcePath;
    this.token_key = token_key;
  }

  setUserInfo(nameResearcher, aboutResearcher, avatarLink) {
    this.nameResearcher = nameResearcher;
    this.aboutResearcher = aboutResearcher;
    this.avatarImgLink = avatarLink;
  }

  updateUserInfo() {
    let promiseUpdate = this.api.postUserInfo(this.serverPath, this.token_key, this.nameResearcher, this.aboutResearcher, this.avatarImgLink);
    promiseUpdate
    .then((result) => {  
       this.userNameContainer.textContent = result.name;
       this.userDescriptionContainer.textContent = result.about;
       this.avatar.style.backgroundImage = `url(${result.avatar})`;
    })
    .catch((err) => {
       console.log(err);
    });

  }

}